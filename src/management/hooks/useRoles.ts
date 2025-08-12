// Custom hook for role management operations

import { useState, useEffect, useCallback } from 'react';
import { useManagement } from '../context/ManagementContext';
import { roleManagementService } from '../services/roleManagementService';
import { validateRoleHierarchy, logValidationResults } from '../utils/metadata-validator';
import type { 
  RoleHierarchy, 
  UserPermissions, 
  ManageableRoles, 
  ChangeUserRoleRequest,
  UserRole 
} from '../types/role';

export interface UseRolesOptions {
  autoLoad?: boolean;
}

export interface UseRolesReturn {
  // Data
  roleHierarchy: RoleHierarchy | null;
  manageableRoles: ManageableRoles | null;
  currentUserPermissions: UserPermissions | null;
  
  // Loading states
  isLoading: boolean;
  isLoadingPermissions: boolean;
  isChangingRole: boolean;
  
  // Error states
  error: string | null;
  permissionError: string | null;
  roleChangeError: string | null;
  
  // Operations
  loadRoleHierarchy: () => Promise<void>;
  loadManageableRoles: () => Promise<void>;
  loadUserPermissions: (userId: string) => Promise<UserPermissions | null>;
  changeUserRole: (userId: string, newRole: UserRole, reason?: string) => Promise<boolean>;
  
  // Permission checks
  canManageRole: (targetRole: UserRole) => boolean;
  canPerformOperation: (operation: string, targetRole?: UserRole) => boolean;
  hasPermission: (permission: string) => boolean;
  
  // Role utilities
  getRoleLevel: (role: UserRole) => number;
  getRolePermissions: (role: UserRole) => string[];
  isRoleHigher: (role1: UserRole, role2: UserRole) => boolean;
  getAvailableRoles: (forRole?: UserRole) => UserRole[];
  
  // Utility
  refresh: () => Promise<void>;
  clearErrors: () => void;
}

export const useRoles = (options: UseRolesOptions = {}): UseRolesReturn => {
  const { autoLoad = true } = options;
  
  const management = useManagement();
  
  const [localRoleHierarchy, setLocalRoleHierarchy] = useState<RoleHierarchy | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [isLoadingPermissions, setIsLoadingPermissions] = useState(false);
  const [permissionError, setPermissionError] = useState<string | null>(null);
  
  const [isChangingRole, setIsChangingRole] = useState(false);
  const [roleChangeError, setRoleChangeError] = useState<string | null>(null);

  // Use cached data from ManagementContext, only load if missing
  const roleHierarchy = management.roleHierarchy || localRoleHierarchy;

  // Auto-load role hierarchy on mount only if not available in ManagementContext
  useEffect(() => {
    if (autoLoad && management.canAccessManagement && !management.roleHierarchy && !localRoleHierarchy) {
      loadRoleHierarchy();
    }
  }, [autoLoad, management.canAccessManagement, management.roleHierarchy, localRoleHierarchy]);

  const loadRoleHierarchy = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await roleManagementService.getRoles();
      
      if (response.success && response.data) {
        // Validate backend metadata
        const validationResult = validateRoleHierarchy(response.data);
        logValidationResults(validationResult, 'useRoles');
        
        // Still set the data even if there are warnings, but errors are critical
        setLocalRoleHierarchy(response.data);
        
        if (!validationResult.isValid) {
          console.error('Critical backend metadata errors detected. Some features may not work correctly.');
        }
      } else {
        setError(response.message || 'Failed to load role hierarchy');
      }
    } catch (err) {
      setError('Failed to load role hierarchy');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadManageableRoles = useCallback(async () => {
    // Only refresh if manageable roles are not already available
    if (!management.manageableRoles) {
      try {
        await management.refreshPermissions();
      } catch (err) {
        console.error('Failed to load manageable roles:', err);
      }
    }
  }, [management]);

  const loadUserPermissions = useCallback(async (userId: string): Promise<UserPermissions | null> => {
    try {
      setIsLoadingPermissions(true);
      setPermissionError(null);
      
      const response = await roleManagementService.getUserPermissions(userId);
      
      if (response.success && response.data) {
        return response.data;
      } else {
        setPermissionError(response.message || 'Failed to load user permissions');
        return null;
      }
    } catch (err) {
      setPermissionError('Failed to load user permissions');
      return null;
    } finally {
      setIsLoadingPermissions(false);
    }
  }, []);

  const changeUserRole = useCallback(async (
    userId: string, 
    newRole: UserRole, 
    reason?: string
  ): Promise<boolean> => {
    try {
      setIsChangingRole(true);
      setRoleChangeError(null);
      
      const request: ChangeUserRoleRequest = {
        role: newRole,
        reason,
      };
      
      const response = await roleManagementService.changeUserRole(userId, request);
      
      if (response.success) {
        return true;
      } else {
        setRoleChangeError(response.message || 'Failed to change user role');
        return false;
      }
    } catch (err) {
      setRoleChangeError('Failed to change user role');
      return false;
    } finally {
      setIsChangingRole(false);
    }
  }, []);

  const canManageRole = useCallback((targetRole: UserRole): boolean => {
    return management.canManageRole(targetRole);
  }, [management]);

  const canPerformOperation = useCallback((operation: string): boolean => {
    return management.canPerformOperation(operation);
  }, [management]);

  const hasPermission = useCallback((permission: string): boolean => {
    // Use canPerformOperation for permission checks since checkPermission doesn't exist
    return management.canPerformOperation(permission);
  }, [management]);

  const getRoleLevel = useCallback((role: UserRole): number => {
    if (!roleHierarchy) return 0;
    return roleHierarchy.levels[role] || 0;
  }, [roleHierarchy]);

  const getRolePermissions = useCallback((role: UserRole): string[] => {
    if (!roleHierarchy) return [];
    return roleHierarchy.permissions[role] || [];
  }, [roleHierarchy]);

  const isRoleHigher = useCallback((role1: UserRole, role2: UserRole): boolean => {
    const level1 = getRoleLevel(role1);
    const level2 = getRoleLevel(role2);
    return level1 > level2;
  }, [getRoleLevel]);

  const getAvailableRoles = useCallback((forRole?: UserRole): UserRole[] => {
    if (!management.manageableRoles) return [];
    
    let availableRoles = management.manageableRoles.manageable_roles;
    
    // If we're checking for a specific role, filter out roles that can't be managed
    if (forRole && !canManageRole(forRole)) {
      availableRoles = availableRoles.filter(role => canManageRole(role));
    }
    
    return availableRoles;
  }, [management.manageableRoles, canManageRole]);

  const refresh = useCallback(async () => {
    await Promise.all([
      loadRoleHierarchy(),
      loadManageableRoles(),
    ]);
  }, [loadRoleHierarchy, loadManageableRoles]);

  const clearErrors = useCallback(() => {
    setError(null);
    setPermissionError(null);
    setRoleChangeError(null);
  }, []);

  return {
    // Data
    roleHierarchy,
    manageableRoles: management.manageableRoles,
    currentUserPermissions: management.currentUserPermissions,
    
    // Loading states
    isLoading,
    isLoadingPermissions,
    isChangingRole,
    
    // Error states
    error,
    permissionError,
    roleChangeError,
    
    // Operations
    loadRoleHierarchy,
    loadManageableRoles,
    loadUserPermissions,
    changeUserRole,
    
    // Permission checks
    canManageRole,
    canPerformOperation,
    hasPermission,
    
    // Role utilities
    getRoleLevel,
    getRolePermissions,
    isRoleHigher,
    getAvailableRoles,
    
    // Utility
    refresh,
    clearErrors,
  };
};
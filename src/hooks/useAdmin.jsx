import React from 'react';
import useSucre from './useSucre';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useAdmin = () => {
    const axiosSucre = useSucre()
    const { user } = useAuth()
    const { data: isAdmin, isPending: isAdminLoding } = useQuery({
        enabled: !!user,
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSucre.get(`/users/admin/${user?.email}`)
            return res.data.admin
        }

    })

    return [isAdmin, isAdminLoding]
};

export default useAdmin;
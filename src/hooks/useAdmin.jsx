import React from 'react';
import useSucre from './useSucre';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useAdmin = () => {
    const axiosSucre = useSucre()
    const { user } = useAuth()
    const { data: isAdmin, isPending: isAdminLoding } = useQuery({
        enabled:!!user,
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const data = await axiosSucre.get(`/users/admin/${user?.email}`)
                .then(res => {
                    console.log(res.data.admin);
                    return res.data.admin
                })
            return data
        }

    })

    return [isAdmin, isAdminLoding]
};

export default useAdmin;
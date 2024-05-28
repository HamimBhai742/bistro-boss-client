import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import usePublic from "./usePublic";


const useMenu = () => {
    // const [menu, setMenu] = useState([])
    const axiosPublic = usePublic()
    const { data: menu = [],refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menu')
            console.log(res.data);
            return res.data
        }
    })
    return [menu,refetch]
    // useEffect(() => {

    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data)
    //         })
    // }, [])
    // return [menu]
};

export default useMenu;
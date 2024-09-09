"use client"
import React, {useEffect} from "react";
import { useRouter } from 'next/navigation'

export default function Page() {

    const router = useRouter();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            router.push("/login")
        }
    }, [router])

    return (
        <div>
            <h1>My Account</h1>
        </div>
    )
}
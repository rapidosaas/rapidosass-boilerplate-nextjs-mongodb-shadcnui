"use client";
import Link from "next/link";
import { Globe, Briefcase, Users, Landmark, MessageSquare } from 'lucide-react';

export default function PP() {
    return (
        <main className="m-auto my-10 max-w-5xl space-y-8 px-3 text-center">
            <h1 className="text-4xl font-bold flex items-center justify-center">
                <Users className="w-10 h-10 mr-3 text-blue-500" /> About BagBusiness
            </h1>

            <section>
                <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
                    <Users className="w-6 h-6 mr-2 text-gray-700" /> What is BagBusiness?
                </h2>
                <p>
                    BagBusiness is a platform that let you find products from Bag Businessmen.
                </p>
            </section>

            <p className="mt-6">
                Thank you for using BagBusiness!
            </p>
        </main>
    )
}
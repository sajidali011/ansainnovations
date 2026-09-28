import React from "react";
import { Head, useForm } from "@inertiajs/react";
import { Lock, Mail, ArrowRight } from "lucide-react";

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post("/admin/login");
    };

    return (
        <>
            <Head title="Admin Login" />

            <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">

                <div className="w-full max-w-md">

                    {/* Logo / Brand */}
                    <div className="text-center mb-8">

                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1261c9] to-[#62a843] shadow-lg">
                            <span className="text-2xl font-black text-white">
                                AI
                            </span>
                        </div>

                        <h1 className="text-2xl font-extrabold text-[#101f55]">
                            ANSA Innovations
                        </h1>

                        <p className="mt-1 text-sm text-slate-500">
                            Admin Panel
                        </p>

                    </div>


                    {/* Login Card */}
                    <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/60 ring-1 ring-slate-100">

                        <div className="mb-7">
                            <h2 className="text-2xl font-bold text-[#101f55]">
                                Welcome Back
                            </h2>

                            <p className="mt-2 text-sm text-slate-500">
                                Sign in to manage your website.
                            </p>
                        </div>


                        <form onSubmit={submit} className="space-y-5">

                            {/* Email */}
                            <div>

                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                >
                                    Email Address
                                </label>

                                <div className="relative">

                                    <Mail
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                        size={18}
                                    />

                                    <input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        placeholder="admin@ansainnovations.com"
                                        autoComplete="email"
                                        className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#1261c9] focus:ring-4 focus:ring-[#1261c9]/10"
                                    />

                                </div>

                                {errors.email && (
                                    <p className="mt-2 text-xs text-red-500">
                                        {errors.email}
                                    </p>
                                )}

                            </div>


                            {/* Password */}
                            <div>

                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                >
                                    Password
                                </label>

                                <div className="relative">

                                    <Lock
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                        size={18}
                                    />

                                    <input
                                        id="password"
                                        type="password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                        className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#1261c9] focus:ring-4 focus:ring-[#1261c9]/10"
                                    />

                                </div>

                                {errors.password && (
                                    <p className="mt-2 text-xs text-red-500">
                                        {errors.password}
                                    </p>
                                )}

                            </div>


                            {/* Remember */}
                            <div className="flex items-center justify-between">

                                <label className="flex items-center gap-2 text-sm text-slate-600">

                                    <input
                                        type="checkbox"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked
                                            )
                                        }
                                        className="h-4 w-4 rounded border-slate-300 text-[#1261c9] focus:ring-[#1261c9]"
                                    />

                                    Remember me

                                </label>

                            </div>


                            {/* Login Button */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1261c9] to-[#62a843] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1261c9]/20 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                            >

                                {processing ? (
                                    "Signing in..."
                                ) : (
                                    <>
                                        Sign In

                                        <ArrowRight
                                            size={18}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </>
                                )}

                            </button>

                        </form>

                    </div>


                    <p className="mt-6 text-center text-xs text-slate-400">
                        © {new Date().getFullYear()} ANSA Innovations. All rights reserved.
                    </p>

                </div>

            </div>
        </>
    );
}
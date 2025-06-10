import React, {useState} from 'react'

function ForgotPassword() {
    const [emailSent, setEmailSent] = useState(false);

    const handleResetPassword = (event) => {
        event.preventDefault();
        // Here you would handle the password reset functionality
        console.log('Password Reset Submitted');
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="w-full max-w-md p-8 space-y-6 bg-gradient-to-r from-purple-200 to-blue-300 rounded-lg shadow-2xl">
                <h2 className="text-2xl font-bold text-center text-gray-700">Reset your password</h2>
                
                {/* Step 1: Ask for Email */}
                {!emailSent ? (
                    <form className="space-y-6" onSubmit={() => setEmailSent(true)}>
                        <div className="relative">
                            <label className="absolute -top-3.5 left-4 text-xs  px-1 text-gray-600">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="w-full px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
                            >
                                Send Reset Link
                            </button>
                        </div>
                    </form>
                ) : (
                    // Step 2: Reset Password
                    <form className="space-y-6" onSubmit={handleResetPassword}>
                        <div className="relative">
                            <label className="absolute -top-3.5 left-4 text-xs bg-white px-1 text-gray-600">New Password</label>
                            <input
                                type="password"
                                placeholder="Enter your new password"
                                className="w-full px-4 py-3 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div className="relative">
                            <label className="absolute -top-3.5 left-4 text-xs bg-white px-1 text-gray-600">Confirm New Password</label>
                            <input
                                type="password"
                                placeholder="Confirm your new password"
                                className="w-full px-4 py-3 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                className="w-full px-4 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
                            >
                                Set New Password
                            </button>
                        </div>
                    </form>
                )}

                {/* Option to go back to Login */}
                <div className="text-sm text-center text-gray-500">
                    <a href="/login" className="text-blue-600 hover:text-blue-500">Back to Login</a>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword
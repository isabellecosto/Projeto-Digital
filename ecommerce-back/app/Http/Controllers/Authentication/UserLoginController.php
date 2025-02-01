<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserLoginController extends Controller
{
    /**
     * Executa o login
     * 
     * @param {Request} $request
     * @return {JsonResponse}
     */
    public function execute(Request $request): JsonResponse
    {
        $authFrom = 'web'; 
        $credentials = $request->only('email', 'password');

        $user = User::where('email', $credentials['email'])->first();

        if ($user) {
            if (Auth::attempt($credentials)) {
                $user->tokens()->delete();

                $token = $user->createToken($authFrom)->plainTextToken;

                return response()->json([
                    'message' => 'Login successful',
                    'access_token' => $token,
                    'token_type' => 'Bearer',
                ], 200);
            }

            return response()->json([
                'message' => 'Invalid credentials',
            ], 401);
        }

        return response()->json([
            'message' => 'User not found',
        ], 422);
    }
}

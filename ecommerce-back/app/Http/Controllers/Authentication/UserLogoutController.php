<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserLogoutController extends Controller
{
    public function execute(Request $request): JsonResponse
    {
        try {
            $user = $request->user();
            $user->tokens()->delete();
    
            return new JsonResponse('User logedout successfully!', 200);
        } catch (\Exception $exception) {
            return new JsonResponse($exception->getMessage(), 500);
        }
    }
}

<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\AuthenticationRequest;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Exception;
use Illuminate\Http\Request;

class AuthenticationController extends Controller
{
    public function register(AuthenticationRequest $request){
        try{
            $imageProfil = Cloudinary::upload($request->file('image')->getRealPath());
        }catch(\Exception $e){
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors de la création: ' . $e->getMessage()
            ], 500);
        }
    }
}

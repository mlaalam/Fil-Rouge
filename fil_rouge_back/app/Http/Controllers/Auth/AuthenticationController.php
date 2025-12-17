<?php

namespace App\Http\Controllers\Auth;

use App\Events\RegisterEvent;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\AuthenticationRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthenticationController extends Controller
{
    public function register(AuthenticationRequest $request){
        try{
            $user = User::create([
              'nom'=>$request->nom,
              'prenom'=>$request->prenom,
              'email'=>$request->email,
              'numero'=>$request->numero,
              'role'=>$request->role,
              'password'=>$request->password,
            ]);
            $token = $user->createToken('auth_token')->plainTextToken;
            // RegisterEvent::dispatch($user);
            return response()->json(['messages'=>'register is successfuly','user'=>$user->role,'token'=>$token],200);
        }catch(\Exception $e){
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors de la création: ' . $e->getMessage()
            ], 500);
        }
    }


    public function login(Request $request){
      $request->validate([
        'email' => 'required|email',
        'password' => 'required|string|min:6',
      ]);
      try{
            $user = User::where('email' ,$request->email)->first();
            if (!$user) {
                return response()->json(['message' => 'Email not found'], 404);
            }
            if(!Hash::check($request->password ,$user->password)){
              return response()->json(['messages'=>'Invalid password'],401);
            }

            $token = $user->createToken('auth_token')->plainTextToken;
            return response()->json([
              'success' => true,
              'token'=>$token,
              'user'=>$user
            ],200);
      }catch(\Exception $e){
        return response()->json([
                'success' => false,
                'message' => 'Erreur Invalid email: ' . $e->getMessage()
            ], 500);
      }
    }


    public function logout(Request $request){
        $request->user()->tokens()->delete();
        return response()->json([
        "messsage"=>"logout successfuly"]);
    }

    public function forgetPssword(Request $request){
      $request->validate([
        'email' => 'required|email',
      ]);
      try{
          $user = User::where('email',$request->email)->firstOrFail();
          if(!$user){
            return response()->json(['message'=>'Email not found'],404);
          }
          return response()->json(['message'=>'verify email']);
      }catch(\Exception $e){
        return response()->json([
                'success' => false,
                'message' => 'Erreur Invalid email: ' . $e->getMessage()
            ], 500);
      }
    }

    public function updatePassword(Request $request,$id){
      $request->validate([
        'password' => 'required|min:6|confirmed',
      ]);
      $user = User::find($id);
      $user->password = $request->password;
      $user->save();
      return response()->json(['message'=>'Password updated successfully']);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use Carbon\Carbon;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
  
    public function register(UserRequest $request)
    {

        $user = User::where('email', $request->email)->first();
      
        if (!$user) {
         
            $user = new User();
            $user->name = $request->apelido;
            $user->email = $request->email;
            $user->password = 'chatReact';
            $user->save();

            if(!$user){
                return response()->json([
                    'status'=>false,
                    'Message'=>'Ocorreu um erro ao cadastrar'
                ]);
            }

            $token = Auth::login($user);

            return $this->respondWithToken($token,$user);
          
    }

    $token = Auth::login($user);

    return $this->respondWithToken($token,$user);
       

    }

   
    
    protected function respondWithToken($token,User $user)
    {
        $date = Carbon::now();
        $carbon_date = Carbon::parse($date);
        $carbon_date->addHours(5);

        return response()->json([
            'status'=>true,
            'data'=>$user,
            'message'=>'Cadastrado com sucesso',
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' =>   $carbon_date
        ]);
    }


    public function me(){

        $user = Auth::user();

        if(!$user){
            return response()->json([
                'status'=>false,
                'Message'=>'Ocorreu um erro ao cadastrar'
            ]);
        }
      
        return response()->json([
            'status'=>true,
            'data'=>$user
        ]);
    }
   
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Message;
use App\Models\ChatRoom;
use App\Events\MessageEvent;
use Illuminate\Http\Request;
use App\Events\MessagePrivateEvent;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\MessageRequest;
use Illuminate\Support\Facades\Event;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      
        $messages =  Message::with('Users')->get();
           
        if(!$messages){
            return response()->json([
                'status'=>false,
                'message'=>'Ocorreu um erro ao buscar as mensagens'
            ]);
        }

        return response()->json([
            'status'=>true,
            'data'=>$messages
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MessageRequest $request)
    {
               
       $userId = Auth::id();

       $message = new Message();
       $message->message = $request->message;
       $message->user_id = $userId;
       $message->save();

       if(!$message){
           return 
           response()->json([
               'status'=>false,
               'message'=>'Ocorreu um erro na mensagem'
           ]);
       }
    
           
        Event::dispatch(new MessageEvent($message));
     
        return response()->json(
            ['status'=>true,
             'data'=>$message->load('Users')
            ]
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function show(Message $message)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function edit(Message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function destroy(Message $message)
    {
        //
    }
}

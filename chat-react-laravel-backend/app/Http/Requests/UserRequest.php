<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'apelido'=>'required|max:255',
            'email'=>'required|max:255',            
        ];
    }

    public function messages()
    {
        return [
            'apelido.required' => 'Apelido é obrigatório',
            'apelido.max'=>'Você excedeu o número máximo de caracteres deste campo',
            
            'email.required' => 'E-mail é obrigatório',
            'email.max'=>'Você excedeu o número máximo de caracteres deste campo',                   
        ];
    }
}

<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class AuthenticationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
          'nom_complet' => 'required|min:3|string',
          'numero' => 'required|regex:/^(\+212|0)[5-7][0-9]{8}$/',
          'role' => 'required|in:client,artisan',
          'email' => 'required|email|unique:users,email',
          'password' => 'required|min:6|confirmed',
        ];
    }
    public function messages(){
      return [
        'nom_complet.required' => 'Le nom est obligatoire.',
        'email.required' => 'L’email est obligatoire.',
        'numero.regex' => 'Le numéro de téléphone est invalide.',
        'numero.required' => 'Le numero est obligatoire.',
        'numero.numeric' => 'Le numéro doit contenir uniquement des chiffres.',
        'email.unique' => 'Cet email existe déjà.',
        'password.required' => 'Le mot de passe est obligatoire.',
        'password.min' => 'Le mot de passe doit contenir au moins 8 caractères.',
        'password.confirmed' => 'Les mots de passe ne correspondent pas.',
      ];
    }
    
}

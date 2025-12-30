<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateArtisanRequest extends FormRequest
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
            'image' => 'sometimes|image|mimes:jpg,jpeg,png',
            'nom_complet' => 'sometimes|string|max:255',
            'ville' => 'sometimes|string|max:255',
            'numero' => 'sometimes', 'regex:/^(\+212|0)[5-7][0-9]{8}$/',
            'secteur' => 'sometimes|string|max:255',
            'propos' => 'sometimes|string',
            'role' => 'sometimes|in:client,artisan',
            'password' => 'sometimes|string|min:6',
            'jours_de_travail' => 'sometimes|integer|min:1',
            'heures_par_jour' => 'sometimes|integer|min:1|max:24',
        ];
    }

    
}

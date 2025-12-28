<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProjectRequest extends FormRequest
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
            'title'=>'required|min:3|string',
            'description'=>'required|min:3|string',
            'image' => 'required|image|mimes:jpg,jpeg,png',
        ];
    }
    public function message(){
      return[
        'title.required' => 'Le title est obligatoire.',
        'description.required' => 'Le description est obligatoire.',
        'image.required' => 'Le image est obligatoire.',
      ];
    }
}

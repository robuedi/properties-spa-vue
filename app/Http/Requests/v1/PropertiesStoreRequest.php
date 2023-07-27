<?php

namespace App\Http\Requests\v1;

use App\Models\ListingType;
use App\Models\PropertyType;
use Illuminate\Foundation\Http\FormRequest;

class PropertiesStoreRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name'              => 'required|min:6',
            'description'       => 'required|min:6',
            'bedrooms'          => 'required|integer|min:0',
            'bathrooms'         => 'required|integer|min:0',
            'property_type_id'  => 'required|exists:'.PropertyType::class.',id',
            'listing_type_id'   => 'required|exists:'.ListingType::class.',id'
        ];
    }
}

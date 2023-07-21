<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\PropertyTypeResource;
use App\Models\PropertyType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

/**
 * Class PropertyTypesController
 *
 */
class PropertyTypesController extends Controller
{

    /**
     * @OA\Get(
     *      path="/api/v1/property-types",
     *      operationId="v1-property-types-index",
     *      tags={"property types"},
     *      summary="Property types",
     *      description="get property types",
     *      @OA\Response(
     *          response=200,
     *          description="successful operation"
     *       )
     *     )
     *
     * Returns App/Model/City
     */
    public function index() : JsonResponse
    {
        $public_fields = ['id', 'name'];
        return PropertyTypeResource::collection(PropertyType::select($public_fields)->get())
                ->additional(['meta' => [
                    'fields' => $public_fields
                ]])
                ->response()
                ->setStatusCode(Response::HTTP_OK)
                ->header('Cache-Control', 'max-age=86400');
    }

}

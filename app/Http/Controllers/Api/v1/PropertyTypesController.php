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
        return PropertyTypeResource::collection(PropertyType::select(['id', 'name'])->get())->response()->setStatusCode(Response::HTTP_OK);
    }

}

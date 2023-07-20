<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\ListingTypeResource;
use App\Models\ListingType;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

/**
 * Class ListingTypesController
 *
 */
class ListingTypesController extends Controller
{

    /**
     * @OA\Get(
     *      path="/api/v1/listing-types",
     *      operationId="v1-listing-types-index",
     *      tags={"listing types"},
     *      summary="Listing types",
     *      description="get listing types",
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
        return ListingTypeResource::collection(ListingType::select(['id', 'name'])->get())->response()->setStatusCode(Response::HTTP_OK);
    }

}

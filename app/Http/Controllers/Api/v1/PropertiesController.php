<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\PropertyResource;
use App\Models\Property;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;

/**
 * Class PropertiesController
 *
 */
class PropertiesController extends Controller
{

    /**
     * @OA\Get(
     *      path="/api/v1/properties",
     *      operationId="v1-properties-index",
     *      tags={"properties"},
     *      summary="Properties",
     *      description="get properties",
     *      @OA\Response(
     *          response=200,
     *          description="successful operation"
     *       )
     *     )
     *
     * Returns App/Model/User
     */
    public function index() : JsonResponse
    {
        $public_fields = Property::getTableColumns();

        $properties = QueryBuilder::for(Property::class)
                        ->allowedFilters([
                            AllowedFilter::exact('bedrooms'),
                        ])
                        ->select($public_fields)
                        ->allowedSorts($public_fields)
                        ->paginate(request('limit', 100))
                        ->appends(request()->query());

        return PropertyResource::collection($properties)
                ->additional(['meta' => [
                    'public_fields' => $public_fields
                ]])
                ->response()
                ->setStatusCode(Response::HTTP_OK);
    }

}

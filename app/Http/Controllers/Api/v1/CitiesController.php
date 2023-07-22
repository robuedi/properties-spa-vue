<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\CityResource;
use App\Models\City;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;

/**
 * Class CitiesController
 *
 */
class CitiesController extends Controller
{

    /**
     * @OA\Get(
     *      path="/api/v1/cities",
     *      operationId="v1-cities-index",
     *      tags={"cities"},
     *      summary="Cities",
     *      description="get cities",
     *      @OA\Parameter(
     *          name="filter",
     *          in="query",
     *          description="Filter the results",
     *          style="deepObject",
     *          @OA\Schema(
     *              type="object",
     *              @OA\Property(
     *                  property="name",
     *                  type="string",
     *                  example="London"
     *              ),
     *              @OA\Property(
     *                  property="country_id",
     *                  type="integer",
     *                  example="1"
     *              )
     *          )
     *      ),
     *      @OA\Parameter(
     *          name="fields",
     *          in="query",
     *          description="Fields",
     *          style="deepObject",
     *          @OA\Schema(
     *              type="object",
     *              @OA\Property(
     *                  property="cities",
     *                  type="string",
     *                  example="id,name,country_id,created_at,updated_at"
     *              )
     *          )
     *      ),
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
        $public_fields = ['id', 'name', 'country_id'];

        $cities = QueryBuilder::for(City::class)
                        ->allowedFilters([
                            'name',
                            AllowedFilter::exact('country_id'),
                        ])
                        ->select($public_fields)
                        ->allowedFields($public_fields)
                        ->allowedSorts($public_fields)
                        ->paginate(request('limit', 100))
                        ->appends(request()->query());

        return CityResource::collection($cities)
            ->additional(['meta' => [
                'public_fields' => $public_fields
            ]])
            ->response()
            ->setStatusCode(Response::HTTP_OK)
            ->header('Cache-Control', 'max-age=86400');
    }

}

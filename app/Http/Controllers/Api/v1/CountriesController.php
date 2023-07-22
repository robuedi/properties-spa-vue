<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\CountryResource;
use App\Models\Country;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;

/**
 * Class CountriesController
 *
 */
class CountriesController extends Controller
{

    /**
     * @OA\Get(
     *      path="/api/v1/countries",
     *      operationId="v1-countries-index",
     *      tags={"countries"},
     *      summary="Countries",
     *      description="get countries",
     *      @OA\Response(
     *          response=200,
     *          description="successful operation"
     *       )
     *     )
     *
     * Returns App/Model/Country
     */
    public function index() : JsonResponse
    {
        $public_fields = ['id', 'name'];

        $countries = QueryBuilder::for(Country::class)
                        ->allowedFilters([
                            AllowedFilter::exact('name'),
                        ])
                        ->select($public_fields)
                        ->allowedSorts($public_fields)
                        ->paginate(request('limit', 100))
                        ->appends(request()->query());

        return CountryResource::collection($countries)
                ->additional(['meta' => [
                    'public_fields' => $public_fields
                ]])
                ->response()
                ->setStatusCode(Response::HTTP_OK)
                ->header('Cache-Control', 'max-age=86400');
    }

}

<?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Response;
use Tests\TestCase;

class ListingTypesControllerTest extends TestCase
{
    use RefreshDatabase;

      
    protected function setUp(): void
    {
        parent::setUp();
        $this->artisan('db:seed --class=ListingTypeSeeder');
    }

    public function testIndexWorks(): void
    {
        $this->json('get', 'api/v1/listing-types')
        ->assertStatus(Response::HTTP_OK)
        ->assertJsonStructure(
            [
                'data' => [
                    '*' => [
                        'id',
                        'name',
                    ]
                ]
            ]
        );
    }

}

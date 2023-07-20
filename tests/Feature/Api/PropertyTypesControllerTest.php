<?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Response;
use Tests\TestCase;

class PropertyTypesControllerTest extends TestCase
{
    use RefreshDatabase;

      
    protected function setUp(): void
    {
        parent::setUp();
        $this->artisan('db:seed --class=PropertyTypeSeeder');
    }

    public function testIndexWorks(): void
    {
        $this->json('get', 'api/v1/property-types')
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

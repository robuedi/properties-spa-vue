<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Properties</title>
        @unless(env('APP_ENV') === 'production')
            @verbatim
                <script type="module" src="http://localhost:5173/@vite/client"></script>
                <script type="module" src="http://localhost:5173/@vite-plugin-checker-runtime-entry"></script>
            @endverbatim
        @endunless

        @vite('resources/js/main.ts')
    </head>
    <body class="antialiased" >
        <div id="app" ></div>
    </body>
</html>

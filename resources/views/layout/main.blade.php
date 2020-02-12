<!DOCTYPE html>
 <html lang="it" dir="ltr">
     <head>
        @include('layout.head')

     </head>
     <body>
         @include('layout.header')
         @yield('content')
         @include('layout.footer')

     </body>
 </html>

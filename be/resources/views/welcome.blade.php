<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Form Tester</title>
</head>

<body>
    <h1>for testing purpose (forms that needs files)</h1>
    <form action="/api/users/43" method="POST" enctype="multipart/form-data">
        @csrf
        {{ method_field('PUT') }}
        <input type="text" name="first_name" placeholder="first_name" id="">
        <input type="text" name="middle_name" placeholder="middle_name" id="">
        <input type="text" name="last_name" placeholder="last_name" id="">
        <input type="file" name="avatar" id="">
        <input type="submit">
    </form>

</body>

</html>

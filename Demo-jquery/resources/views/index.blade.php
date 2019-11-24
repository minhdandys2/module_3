@extends('layouts.app')

@section('content')
<div class="container">
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">User</a>
        <form class="form-inline">
            <input class="form-control mr-sm-2" placeholder="Search" id="search-user" name="keyword">
        </form>
    </nav>
    <button type="button" id="hide" class="btn btn-primary">Hide</button>
    <button type="button" id="show" class="btn btn-primary" style="display: none">Show</button>
    <table class="table">
        <thead class="thead-light">
        <tr>
            <th scope="col">Stt</th>
            <th class="name" scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody id="list-users">
        @foreach($users as $key => $user)
            <tr>
                <th scope="row">{{++$key}}</th>
                <td class="name">{{$user->name}}</td>
                <td>{{$user->email}}</td>
                <td>
                    <a class="btn btn-success">Edit </a>
                    <a class="btn btn-danger delete-user" data-id="{{$user->id}}" >Delete</a>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
</div>
@endsection

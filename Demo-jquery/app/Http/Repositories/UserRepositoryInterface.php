<?php


namespace App\Http\Repositories;


interface UserRepositoryInterface
{
    public function getAll();
    public function search($keyword);
    public function getById($id);
    public function destroy($user);
}

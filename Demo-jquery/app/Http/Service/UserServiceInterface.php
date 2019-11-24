<?php


namespace App\Http\Service;


interface UserServiceInterface
{
    public function index();
    public function search($keyword);
    public function getById($id);
    public function destroy($id);
}

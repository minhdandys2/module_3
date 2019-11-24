<?php


namespace App\Http\Service\Impl;


use App\Http\Repositories\UserRepositoryInterface;
use App\Http\Service\UserServiceInterface;

class UserService implements UserServiceInterface
{
    public $userRepositoryEloquent;
    public function __construct(UserRepositoryInterface $userRepositoryEloquent)
    {
        $this->userRepositoryEloquent = $userRepositoryEloquent;
    }

    public function index()
    {
        return $this->userRepositoryEloquent->getAll();
    }

    public function search($keyword)
    {
        return $this->userRepositoryEloquent->search($keyword);
    }

    public function getById($id)
    {
        return $this->userRepositoryEloquent->getById($id);
    }

    public function destroy($id)
    {
        $user =  $this->getById($id);
        return $this->userRepositoryEloquent->delete($user);
    }
}

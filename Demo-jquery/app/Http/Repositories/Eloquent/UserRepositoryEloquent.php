<?php


namespace App\Http\Repositories\Eloquent;


use App\Http\Repositories\UserRepositoryInterface;
use App\User;

class UserRepositoryEloquent implements UserRepositoryInterface
{
    public $user;
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function getAll()
    {
        return $this->user->all();
    }

    public function search($keyword)
    {
       return $this->user->where('name','LIKE',"%$keyword%")->orwhere('email','LIKE',"%$keyword%")->get();
    }

    public function getById($id)
    {
        return $this->user->findOrFail($id);
    }

    public function destroy($user)
    {
        return $user->delete();
    }
}

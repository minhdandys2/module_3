<?php

namespace App\Http\Controllers;

use App\Http\Service\UserServiceInterface;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public $userService;
    public function __construct(UserServiceInterface $userService)
    {
        $this->userService = $userService;
        $this->middleware('auth');
    }

    public function index(){
        $users = $this->userService->index();
        return view('index',compact('users'));
    }
    public function search(Request $request){
        if ($request->ajax()){
            $keyword = $request->keyword;
            $users = $this->userService->search($keyword);
            return response()->json($users);
        }
    }
    public function delete($id)
    {
        $user = $this->userService->getById($id);
        $user->delete();
        return response()->json([
        'message' => 'Xoa thanh cong'
        ]);
    }
}

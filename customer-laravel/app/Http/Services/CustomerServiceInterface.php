<?php


namespace App\Http\Services;


interface CustomerServiceInterface extends ServiceInterface
{
    public function findById($id);
    public function create($obj);
    public function edit($request, $id);
    public function delete($id);
}

<?php


namespace App\Http\Repositories\Eloquent;


use App\Customer;
use App\Http\Repositories\CustomerRepositoryInterface;

class CustomerRepositoryEloquent implements CustomerRepositoryInterface
{
    public $customer;
    public function __construct(Customer $customer)
    {
        $this->customer = $customer;
    }

    public function getAll()
    {
        return $this->customer->all();
    }

    public function findById($id)
    {
        return $this->customer->findOrFail($id);
    }

    public function store($obj)
    {
        return $obj->save();
    }

    public function edit($obj)
    {
        return $obj->save();
    }

    public function delete($obj)
    {
        return $obj->delete();
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Services\CustomerServiceInterface;
use http\Env\Response;
use Illuminate\Http\Request;
use mysql_xdevapi\Exception;

class CustomerController extends Controller
{
    public $customerService;

    public function __construct(CustomerServiceInterface $customerService)
    {
        $this->customerService = $customerService;
    }

    public function index()
    {
        try {
            $customers = $this->customerService->getAll();
        } catch (\Exception $e) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => $e->getMessage()
                ]
            );
        }
        return response()->json([
            'status' => 'success',
            'data' => $customers
        ]);
    }

    public function getById($id)
    {
        $customer = $this->customerService->findById($id);
        return response()->json($customer);
    }

    public function create(Request $request)
    {
        try {
            $this->customerService->create($request);
        } catch (\Exception $e) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => $e->getMessage()
                ]
            );
        };
        return response()->json([
            'status' => 'success',
            'message' => 'Tao moi thanh cong'
        ]);
    }

    public function edit(Request $request, $id)
    {
        try {
            $this->customerService->edit($request, $id);
        }catch (\Exception $e){
            response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ]);
        }
        return response()->json([
            'status' => 'success',
            'message' => 'Cap nhat thanh cong'
        ]);
    }

    public function delete($id)
    {
        try {
            $this->customerService->delete($id);
        }catch (\Exception $e) {
            response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ]);
        }
        return response()->json([
            'status' => 'success',
            'message' => 'Xoa thanh cong'
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

/**
 * Class UserController
 * @package App\Http\Controllers
 */
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return Inertia::render('User/index', [
            'users' => $users,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = new User();

        return Inertia::render('User/create', [
            'user' => $user,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store($request)
    {
        User::create($request->validated());

        return Redirect::route('users.index')
            ->with('success', 'User created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = User::find($id);
        return Inertia::render('User/show', [
            'user' => $user,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $user = User::find($id);

        return Inertia::render('User/edit', [
            'user' => $user,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($request, User $user)
    {
        $user->update($request->validated());

        return redirect()->route('users.index')
            ->with('success', 'User updated successfully');
    }

    public function destroy($id)
    {
        User::find($id)->delete();

        return redirect()->route('users.index')
            ->with('success', 'User deleted successfully');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Http\Requests\MemberRequest;
use Inertia\Inertia;

/**
 * Class MemberController
 * @package App\Http\Controllers
 */
class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $members = Member::all();

        return Inertia::render('member/index', [
            'members' => $members,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $member = new Member();
        return Inertia::render('member/create', [
            'member' => $member,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MemberRequest $request)
    {
        Member::create($request->validated());

        return redirect()->route('members.index')
            ->with('success', 'Member created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $member = Member::find($id);

        return Inertia::render('member/show', [
            'member' => $member,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $member = Member::find($id);

        return Inertia::render('member/edit', [
            'member' => $member,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(MemberRequest $request, Member $member)
    {
        $member->update($request->validated());

        return redirect()->route('members.index')
            ->with('success', 'Member updated successfully');
    }

    public function destroy($id)
    {
        Member::find($id)->delete();

        return redirect()->route('members.index')
            ->with('success', 'Member deleted successfully');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Http\Requests\ContactRequest;

/**
 * Class ContactController
 * @package App\Http\Controllers
 */
class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Contact::paginate();

        return view('contact.index', compact('contacts'))
            ->with('i', (request()->input('page', 1) - 1) * $contacts->perPage());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $contact = new Contact();
        return view('contact.create', compact('contact'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ContactRequest $request)
    {
        Contact::create($request->validated());

        return redirect()->route('contacts.index')
            ->with('success', 'Contact created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $contact = Contact::find($id);

        return view('contact.show', compact('contact'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $contact = Contact::find($id);

        return view('contact.edit', compact('contact'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ContactRequest $request, Contact $contact)
    {
        $contact->update($request->validated());

        return redirect()->route('contacts.index')
            ->with('success', 'Contact updated successfully');
    }

    public function destroy($id)
    {
        Contact::find($id)->delete();

        return redirect()->route('contacts.index')
            ->with('success', 'Contact deleted successfully');
    }
}

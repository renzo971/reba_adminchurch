@extends('layouts.app')

@section('template_title')
    {{ $contact->name ?? __('Show') . " " . __('Contact') }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
                        <div class="float-left">
                            <span class="card-title">{{ __('Show') }} Contact</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary btn-sm" href="{{ route('contacts.index') }}"> {{ __('Back') }}</a>
                        </div>
                    </div>

                    <div class="card-body bg-white">
                        
                        <div class="form-group mb-2 mb20">
                            <strong>Name:</strong>
                            {{ $contact->name }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Email:</strong>
                            {{ $contact->email }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Phone:</strong>
                            {{ $contact->phone }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Subject:</strong>
                            {{ $contact->subject }}
                        </div>
                        <div class="form-group mb-2 mb20">
                            <strong>Message:</strong>
                            {{ $contact->message }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

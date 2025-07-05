@extends('layouts.app')

@section('content')
    @include('partials.navigation')
    @include('partials.hero')
    @include('partials.features')
    @include('partials.pricing')
    @include('partials.cta')
    @include('partials.footer')
    @include('partials.auth-modal')
@endsection

@push('scripts')
    @include('partials.scripts')
@endpush
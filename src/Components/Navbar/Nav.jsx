import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default function NavBar({ nav1link, nav2link, nav3link, nav1, nav2, nav3 , nav4, nav4link }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
    <div classNameass="container-fluid">
      <a className="navbar-brand" href="#"><span className="text-danger">U</span>ltra <span className="text-primary">S</span>uccess</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav m-auto">
          <li>
            <a className="nav-link active" href="#">What is <span className="text-danger">U</span>ltra <span className="text-primary">S</span>uccess?</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Content</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Our Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#testimonials">Testimonials</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#team">Meet the Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#blog">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#blog">Coming Soon</a>
          </li>
        </ul>
        <div>
        <ul className="navbar-nav m-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact Us</a>
          </li>
          </ul>
      </div>
    </div>
    </div>
  </nav>
  )
}

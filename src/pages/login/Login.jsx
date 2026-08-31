import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import toast from "react-hot-toast";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import "./login.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      toast.error("Please enter your email and password");
      return;
    }

    toast.success("Welcome back!");
  }

  return (
    <PageTransition>
      <section className="login_page">
        <div className="container">
          <div className="login_wrapper">
            <div className="login_info">
              <h2>Welcome Back</h2>
              <p>
                Sign in to access your orders, saved items and exclusive deals.
              </p>
              <div className="bottom_line"></div>
            </div>

            <form className="login_form" onSubmit={handleSubmit}>
              <h3>Login</h3>

              <div className="input_group">
                <FaEnvelope />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="input_group">
                <FaLock />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                />
              </div>

              <div className="login_options">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <Link to="/forgot-password">Forgot password?</Link>
              </div>

              <button type="submit">
                <FaSignInAlt /> Sign In
              </button>

              <p className="register_link">
                Don&apos;t have an account? <Link to="/register">Register</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

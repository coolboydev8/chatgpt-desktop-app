// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod core;
use core::{cmd, setup};

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_os::init())
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![
            cmd::view_reload,
            cmd::view_url,
            cmd::view_go_forward,
            cmd::view_go_back,
            cmd::set_view_ask,
            cmd::get_app_conf,
            cmd::window_pin,
            cmd::ask_sync,
            cmd::ask_send,
            cmd::set_theme,
        ])
        .setup(setup::init)
        .run(tauri::generate_context!())
        .expect("error while running lencx/ChatGPT application");
}

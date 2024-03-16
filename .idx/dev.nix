{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs
  ];
  idx.extensions = [
    "svelte.svelte-vscode"
    "vue.volar"
  ];
  idx.previews = {
    previews = [
      {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
        ];
        id = "web";
        manager = "web";
      }
      {
        id = "ios";
        manager = "ios";
      }
    ];
  };
}
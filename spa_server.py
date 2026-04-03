import http.server
import socketserver
import os

PORT = 8014  # Or any other port you prefer
DIRECTORY = "./"

class SpaHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Check if the requested file exists
        path = self.translate_path(self.path)
        if os.path.isfile(path):
            # If it exists, serve it normally
            super().do_GET()
        else:
            # If not, serve index.html (SPA fallback)
            self.path = '/index.html'
            super().do_GET()

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()


with socketserver.TCPServer(("", PORT), SpaHandler) as httpd:
    print(f"Serving SPA from {DIRECTORY} at port {PORT}")
    httpd.serve_forever()

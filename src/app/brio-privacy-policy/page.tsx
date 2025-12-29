import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BrioPrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)] rounded-3xl p-6 md:p-10">
            <CardHeader className="space-y-4">
              <CardTitle className="font-headline text-3xl md:text-4xl text-center">Privacy Policy – Brio Automation</CardTitle>
              <p className="text-center text-white/60">Last Updated: {currentDate}</p>
            </CardHeader>
            <CardContent className="space-y-6 text-white/80 leading-relaxed">
              <p>
                Brio Automation is a productivity-focused Chrome extension designed to help users save and reuse vehicle sale–related data across multiple systems, reducing repetitive manual data entry.
              </p>
              <p>
                We are committed to protecting user privacy and handling data responsibly.
              </p>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Information We Collect</h3>
                <p>Brio Automation may collect and process the following data only when explicitly initiated by the user:</p>
                
                <h4 className="text-lg font-medium text-white/90 mt-4">1. User-Provided Data</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Vehicle details (e.g., frame/chassis number, engine number, model details)</li>
                  <li>Customer details (e.g., name, phone number, address, nominee details)</li>
                  <li>Policy or plan-related details entered into supported web forms</li>
                </ul>
                <p className="mt-2 text-sm italic">This data is collected only when the user clicks actions such as “Save Data” inside the extension.</p>

                <h4 className="text-lg font-medium text-white/90 mt-4">2. Authentication Data</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Username and password are used only at login time to authenticate with your organization’s backend.</li>
                  <li>Passwords are never stored by the extension.</li>
                  <li>Authentication tokens (JWT) and token expiry information may be stored locally to maintain the session.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">How We Use the Information</h3>
                <p>Collected data is used solely to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Save vehicle and customer data for later reuse</li>
                  <li>Auto-fill supported web forms on user request</li>
                  <li>Allow searching of saved records by frame number, phone number, or name</li>
                  <li>Improve speed, accuracy, and consistency during vehicle sale and issuance workflows</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Data Storage & Security</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Data is transmitted securely to your organization’s backend services (e.g., via HTTPS APIs).</li>
                  <li>The extension does not directly connect to databases such as Azure Cosmos DB.</li>
                  <li>Locally stored data is limited to:
                    <ul className="list-circle pl-6 mt-1 space-y-1">
                      <li>Session tokens</li>
                      <li>Minimal extension state (e.g., last selected record)</li>
                    </ul>
                  </li>
                  <li>No sensitive credentials (passwords) are stored locally.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Data Sharing</h3>
                <p>Brio Automation:</p>
                <ul className="list-none space-y-2">
                  <li>❌ Does not sell or share user data with third parties</li>
                  <li>❌ Does not use data for advertising or tracking</li>
                  <li>❌ Does not collect data from unrelated websites</li>
                </ul>
                <p>Data is shared only with your organization’s backend systems as required to provide the extension’s core functionality.</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">User Control</h3>
                <p>Users have full control over:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>When data is saved</li>
                  <li>When data is loaded or auto-filled</li>
                  <li>When to log out (which clears the active session)</li>
                </ul>
                <p>The extension operates only after explicit user actions.</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Permissions Justification Summary</h3>
                <p>Brio Automation requests permissions strictly necessary to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Read and fill form fields on supported websites</li>
                  <li>Store session state securely</li>
                  <li>Provide a side panel user interface</li>
                </ul>
                <p>Permissions are never used for background data collection.</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Children’s Privacy</h3>
                <p>Brio Automation is not intended for use by children under the age of 13 and does not knowingly collect data from children.</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Changes to This Policy</h3>
                <p>This Privacy Policy may be updated to reflect functional or regulatory changes. Updates will be reflected with a revised “Last Updated” date.</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Contact Information</h3>
                <p>If you have questions or concerns about this Privacy Policy, please contact:</p>
                <p>Email: <a href="mailto:support@infynialabs.com" className="text-primary hover:underline">support@infynialabs.com</a></p>
                <p>Organization: Infynia Labs.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}




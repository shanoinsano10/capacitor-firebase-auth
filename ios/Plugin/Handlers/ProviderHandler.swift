import Foundation
import Capacitor
import FirebaseAuth

protocol ProviderHandler {
    func initialize(plugin: Shanoinsano10CapacitorFirebaseAuth) -> Void
    func signIn(call: CAPPluginCall) -> Void
    func signOut() throws -> Void
    func isAuthenticated() -> Bool
    func fillResult(credential: AuthCredential?, data: PluginResultData) -> PluginResultData
}

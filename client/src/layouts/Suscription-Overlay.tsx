import { Card, CardContent, CardDescription, CardHeader } from "#/ui/card"
import { AlertTriangle, RefreshCw, Search } from "lucide-react"
import { ScrollArea } from "#/ui/scroll-area"
import { Separator } from "#/ui/separator"
import mdbIcon from '/assets/mdb.png'
import { Badge } from "#/ui/badge"

interface SubscriptionOverlayProps { visible: boolean }
export default function SubscriptionOverlay({ visible }: SubscriptionOverlayProps) {
  if (!visible) return null
  return (
    <ScrollArea className="flex fixed inset-0 z-50 items-center justify-center p-4">
      {/* Backdrop borroso */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md" />

      <div className="flex items-center justify-center">
        {/* Tarjeta central */}
        <Card className="relative w-full max-w-2xl items-center justify-center shadow-2xl border-2 border-amber-200 bg-white">
          <CardHeader className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              {/* Logo MongoDB simulado */}
              <div className="flex items-center justify-center w-16 h-16 rounded-lg">
                <img src={mdbIcon} alt="MDB Icon" className="w-16 h-16" />
              </div>
              <AlertTriangle className="h-8 w-8 text-amber-500 animate-pulse" />
            </div>

            <div>
              <CardDescription className="text-lg mt-2 font-semibold text-gray-700">
                MongoDB Atlas - Advertencia de Sincronización
              </CardDescription>
            </div>

            <Badge variant="secondary" className="text-sm px-4 py-1 bg-amber-100 text-amber-800 border-amber-300">
              Revisión Requerida <AlertTriangle className="h-4 w-4 ml-2" />
            </Badge>
          </CardHeader>

          <CardContent className="space-y-6">
            <Separator />

            {/* Mensaje del sistema */}
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-amber-900 mb-2 flex items-center">
                <RefreshCw className="h-4 w-4 mr-2" />🔍 Detección Automática de Inconsistencias
              </h4>
              <p className="text-sm text-amber-800 leading-relaxed">
                MongoDB Atlas ha detectado inconsistencias en los índices de sincronización de la colección
                <code className="bg-amber-100 px-1 rounded text-amber-900 font-mono">users_activity</code>. Los índices
                compuestos presentan fragmentación que puede afectar el rendimiento de las consultas.
              </p>
            </div>

            {/* Detalles técnicos */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                <Search className="h-4 w-4 mr-2" />
                Detalles Técnicos Detectados
              </h4>
              <ul className="text-sm text-blue-800 space-y-2">
                <li className="flex items-start">
                  <span className="font-mono bg-blue-100 px-2 py-1 rounded text-xs mr-2 mt-0.5">IDX_001</span>
                  Índice compuesto en <code>user_id + timestamp</code> con 23% de fragmentación
                </li>
                <li className="flex items-start">
                  <span className="font-mono bg-blue-100 px-2 py-1 rounded text-xs mr-2 mt-0.5">IDX_002</span>
                  Índice de texto en <code>search_terms</code> requiere reindexación
                </li>
                <li className="flex items-start">
                  <span className="font-mono bg-blue-100 px-2 py-1 rounded text-xs mr-2 mt-0.5">SYNC</span>
                  Replica set secundaria con retraso de 2.3 segundos
                </li>
              </ul>
            </div>

            {/* Impacto en rendimiento */}
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2 flex items-center">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Impacto en el Rendimiento
              </h4>
              <ul className="text-sm text-orange-800 space-y-1">
                <li>• Consultas de búsqueda 40% más lentas de lo esperado</li>
                <li>• Operaciones de agregación con mayor latencia</li>
                <li>• Posible inconsistencia temporal en datos replicados</li>
              </ul>
            </div>

            {/* Estado actual */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Estado Actual de la Base de Datos</h4>
              <div className="bg-white p-3 rounded border border-gray-300">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-900">MongoDB Atlas M10</span>
                  <Badge className="bg-green-600">Operacional</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Conexiones activas:</span>
                    <span className="font-semibold ml-1">47/100</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Uso de memoria:</span>
                    <span className="font-semibold ml-1">68%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Acciones recomendadas */}
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">✅ Acciones Recomendadas</h4>
              <p className="text-sm text-green-800 mb-3">
                Para optimizar el rendimiento y resolver las inconsistencias detectadas:
              </p>

              <div className="bg-white p-3 rounded border border-green-300">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-green-900">1. Revisar Panel de MongoDB</span>
                    <Badge className="bg-green-600 text-xs">Prioritario</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-green-900">2. Ejecutar Reindexación</span>
                    <Badge variant="outline" className="text-xs">
                      Recomendado
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-green-900">3. Verificar Configuración de Réplicas</span>
                    <Badge variant="outline" className="text-xs">
                      Opcional
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Nota técnica */}
            <div className="text-xs text-gray-500 text-center pt-2 border-t">
              Alert ID: MONGO-IDX-2024-
              {Math.floor(Math.random() * 1000)
                .toString()
                .padStart(3, "0")}{" "}
              | Generado por MongoDB Atlas Monitoring | Timestamp: {new Date().toLocaleString("es-ES")}
            </div>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  )
}
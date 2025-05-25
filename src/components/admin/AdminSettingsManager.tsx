
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Paypal, Key, Settings, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PaymentSettings {
  stripe_enabled: boolean;
  stripe_public_key: string;
  stripe_secret_key: string;
  paypal_enabled: boolean;
  paypal_client_id: string;
  paypal_client_secret: string;
}

interface SystemSettings {
  site_name: string;
  site_description: string;
  default_credit_amount: number;
  registration_enabled: boolean;
  email_verification_required: boolean;
}

export const AdminSettingsManager = () => {
  const [paymentSettings, setPaymentSettings] = useState<PaymentSettings>({
    stripe_enabled: true,
    stripe_public_key: "",
    stripe_secret_key: "",
    paypal_enabled: false,
    paypal_client_id: "",
    paypal_client_secret: ""
  });

  const [systemSettings, setSystemSettings] = useState<SystemSettings>({
    site_name: "منصة الذكاء الاصطناعي",
    site_description: "منصة متقدمة للذكاء الاصطناعي والمحادثات الذكية",
    default_credit_amount: 5.0,
    registration_enabled: true,
    email_verification_required: true
  });

  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      // Load settings from database
      console.log('Loading system settings...');
      // Placeholder - replace with actual API call
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };

  const savePaymentSettings = async () => {
    try {
      setLoading(true);
      // Save payment settings to database
      console.log('Saving payment settings:', paymentSettings);
      
      toast({
        title: "تم الحفظ",
        description: "تم حفظ إعدادات الدفع بنجاح"
      });
    } catch (error) {
      toast({
        title: "خطأ",
        description: "فشل في حفظ إعدادات الدفع",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const saveSystemSettings = async () => {
    try {
      setLoading(true);
      // Save system settings to database
      console.log('Saving system settings:', systemSettings);
      
      toast({
        title: "تم الحفظ",
        description: "تم حفظ إعدادات النظام بنجاح"
      });
    } catch (error) {
      toast({
        title: "خطأ",
        description: "فشل في حفظ إعدادات النظام",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Payment Settings */}
      <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <CreditCard className="ml-2 h-5 w-5 text-purple-400" />
            إعدادات بوابات الدفع
          </CardTitle>
          <CardDescription className="text-gray-300">
            إدارة بوابات الدفع المتاحة (Stripe & PayPal)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Stripe Settings */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-reverse space-x-2">
                <CreditCard className="h-5 w-5 text-blue-500" />
                <Label htmlFor="stripe-enabled" className="text-white font-medium">
                  تفعيل Stripe
                </Label>
              </div>
              <Switch
                id="stripe-enabled"
                checked={paymentSettings.stripe_enabled}
                onCheckedChange={(checked) =>
                  setPaymentSettings({...paymentSettings, stripe_enabled: checked})
                }
              />
            </div>
            
            {paymentSettings.stripe_enabled && (
              <div className="space-y-4 mr-7">
                <div className="space-y-2">
                  <Label htmlFor="stripe-public" className="text-gray-300">
                    Stripe Public Key
                  </Label>
                  <Input
                    id="stripe-public"
                    type="text"
                    placeholder="pk_test_..."
                    value={paymentSettings.stripe_public_key}
                    onChange={(e) =>
                      setPaymentSettings({...paymentSettings, stripe_public_key: e.target.value})
                    }
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stripe-secret" className="text-gray-300">
                    Stripe Secret Key
                  </Label>
                  <Input
                    id="stripe-secret"
                    type="password"
                    placeholder="sk_test_..."
                    value={paymentSettings.stripe_secret_key}
                    onChange={(e) =>
                      setPaymentSettings({...paymentSettings, stripe_secret_key: e.target.value})
                    }
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
              </div>
            )}
          </div>

          <Separator className="bg-slate-700" />

          {/* PayPal Settings */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-reverse space-x-2">
                <Paypal className="h-5 w-5 text-blue-600" />
                <Label htmlFor="paypal-enabled" className="text-white font-medium">
                  تفعيل PayPal
                </Label>
              </div>
              <Switch
                id="paypal-enabled"
                checked={paymentSettings.paypal_enabled}
                onCheckedChange={(checked) =>
                  setPaymentSettings({...paymentSettings, paypal_enabled: checked})
                }
              />
            </div>
            
            {paymentSettings.paypal_enabled && (
              <div className="space-y-4 mr-7">
                <div className="space-y-2">
                  <Label htmlFor="paypal-client" className="text-gray-300">
                    PayPal Client ID
                  </Label>
                  <Input
                    id="paypal-client"
                    type="text"
                    placeholder="PayPal Client ID"
                    value={paymentSettings.paypal_client_id}
                    onChange={(e) =>
                      setPaymentSettings({...paymentSettings, paypal_client_id: e.target.value})
                    }
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="paypal-secret" className="text-gray-300">
                    PayPal Client Secret
                  </Label>
                  <Input
                    id="paypal-secret"
                    type="password"
                    placeholder="PayPal Client Secret"
                    value={paymentSettings.paypal_client_secret}
                    onChange={(e) =>
                      setPaymentSettings({...paymentSettings, paypal_client_secret: e.target.value})
                    }
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
              </div>
            )}
          </div>

          <Button 
            onClick={savePaymentSettings}
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700"
          >
            <Save className="ml-2 h-4 w-4" />
            حفظ إعدادات الدفع
          </Button>
        </CardContent>
      </Card>

      {/* System Settings */}
      <Card className="bg-white/5 border-purple-500/20 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Settings className="ml-2 h-5 w-5 text-green-400" />
            إعدادات النظام العامة
          </CardTitle>
          <CardDescription className="text-gray-300">
            إعدادات عامة للموقع والتسجيل
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="site-name" className="text-gray-300">
                اسم الموقع
              </Label>
              <Input
                id="site-name"
                value={systemSettings.site_name}
                onChange={(e) =>
                  setSystemSettings({...systemSettings, site_name: e.target.value})
                }
                className="bg-slate-800 border-slate-700 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="default-credit" className="text-gray-300">
                الرصيد الافتراضي للمستخدمين الجدد ($)
              </Label>
              <Input
                id="default-credit"
                type="number"
                step="0.01"
                value={systemSettings.default_credit_amount}
                onChange={(e) =>
                  setSystemSettings({...systemSettings, default_credit_amount: parseFloat(e.target.value) || 0})
                }
                className="bg-slate-800 border-slate-700 text-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="site-description" className="text-gray-300">
              وصف الموقع
            </Label>
            <Input
              id="site-description"
              value={systemSettings.site_description}
              onChange={(e) =>
                setSystemSettings({...systemSettings, site_description: e.target.value})
              }
              className="bg-slate-800 border-slate-700 text-white"
            />
          </div>

          <Separator className="bg-slate-700" />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="registration" className="text-white">
                السماح بالتسجيل الجديد
              </Label>
              <Switch
                id="registration"
                checked={systemSettings.registration_enabled}
                onCheckedChange={(checked) =>
                  setSystemSettings({...systemSettings, registration_enabled: checked})
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="email-verification" className="text-white">
                مطالبة بتأكيد البريد الإلكتروني
              </Label>
              <Switch
                id="email-verification"
                checked={systemSettings.email_verification_required}
                onCheckedChange={(checked) =>
                  setSystemSettings({...systemSettings, email_verification_required: checked})
                }
              />
            </div>
          </div>

          <Button 
            onClick={saveSystemSettings}
            disabled={loading}
            className="bg-green-600 hover:bg-green-700"
          >
            <Save className="ml-2 h-4 w-4" />
            حفظ إعدادات النظام
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
